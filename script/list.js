const boxType = document.getElementById('select')
const selectList = document.getElementById('sub')
const b = document.getElementById('list')

selectList.addEventListener("click", () => {
  let input
  const ulitem = document.createElement('li')
  ulitem.innerHTML = boxType.value
  list.append(ulitem)
  input.value = ''
})
