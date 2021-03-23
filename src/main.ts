

console.log('hey!')

window.onload = () => {
  const main: HTMLDivElement | null = document.querySelector('.main') ?? null
  if (main === null) return

  main.innerText = 'Script Loaded!';

  const playButton = document.createElement('button')
  playButton.innerText = 'Play'
  playButton.addEventListener('click', (e: MouseEvent) => {
    (async () => {
      const audioUrl = 'https://raw.githubusercontent.com/aoirint/audiozoo/master/tuunas_amanze/one_day/One%20Day_20210315.m4a'
      const audioResponse = await fetch(audioUrl)
      const audioBlob = await audioResponse.blob()
      const audioObjectUrl = URL.createObjectURL(audioBlob)
      console.log(`Object URL ${audioObjectUrl} is created.`)

      const audio = new Audio()
      audio.src = audioObjectUrl

      // @ts-ignore
      const stream = audio.captureStream()
      stream.onaddtrack = async (event: MediaStreamTrackEvent) => {
        const tracks = await stream.getTracks()
        console.log(tracks)
      }

      audio.addEventListener('ended', (event: Event) => {
        URL.revokeObjectURL(audioObjectUrl)
        console.log(`Object URL ${audioObjectUrl} is revoked.`)
      })

      audio.play()
    })()
  })

  document.body.appendChild(playButton)

}
