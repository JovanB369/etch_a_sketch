//Create grid



const container = document.querySelector('.container')
const resetButton =  document.querySelector('button')

const createRandomRGB = () =>{
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return { r, g, b}

}

const createGrid = (amtOfGrids) =>{

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

    for (let i = 0;i < amtOfGrids;i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0;j < amtOfGrids;j++){
            const { r, g, b} = createRandomRGB()
            const widthAndHeight  = 900 / amtOfGrids
            const gridBox = document.createElement('div')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener('mouseenter', () => {
                const currenOpacity = gridBox.style.opacity
                const bgColor = col = "rgba(" + r + "," + g + "," + b + ")" //> random color
                gridBox.style.background = bgColor
                // add 10% opacity each time you click on box
                if (currenOpacity){
                    gridBox.style.opacity = Number(currenOpacity) + .1
                }else{
                    gridBox.style.opacity = .1
                }
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

