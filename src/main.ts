
console.log('hey!')

window.onload = () => {
  const main: HTMLDivElement | null = document.querySelector('.main') ?? null
  if (main === null) return

  main.innerText = 'Script Loaded!'
}
