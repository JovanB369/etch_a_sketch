//Create grid



const container = document.querySelector('.container')
const resetButton =  document.querySelector('button')

const createGrid = (amtOfGrids) =>{

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

    for (let i = 0;i < amtOfGrids;i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0;j < amtOfGrids;j++){
            const widthAndHeight  = 900 / amtOfGrids
            const gridBox = document.createElement('div')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })

            gridBox.classList.add('grid-box')
            row.appendChild(gridBox)
        }
        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

resetButton.addEventListener('click', () =>{
    let userSize = Number(prompt('What dimesions do you want your grid to be'))

    while (userSize > 100){
        userSize  = Number(prompt('Pick new dimesions(less than a 100)'))
    }

    const wrapper = document.querySelector('.wrapper')

    if (!wrapper){
        createGrid(userSize)
    }
    else{
        wrapper.remove()
        createGrid(userSize)
    }


})

