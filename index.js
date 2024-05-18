
const dovednostHTML = prompt('Zadejte úroveň dovednosti v HTML (0-100):')
const dovednostCSS = prompt('Zadejte úroveň dovednosti v CSS (0-100):')
const dovednostJS = prompt('Zadejte úroveň dovednosti v JavaScript (0-100):')


const updateSkill = (elementID,hodnotaSkillu) => {
    const element = document.querySelector(elementID)

    if (hodnotaSkillu >= 0 && hodnotaSkillu <= 100) {
        const elProgress = element.querySelector('.skill__progress')
        elProgress.style.width = hodnotaSkillu + '%'
    } else {
        document.body.innerHTML = 'Zadejte hodnoty mezi 0 a 100'
    }
        const elValue = element.querySelector('.skill__value')
        elValue.textContent = hodnotaSkillu + '/ 100'
    } 


updateSkill('#skill1',dovednostHTML)
updateSkill('#skill2',dovednostCSS)
updateSkill('#skill3',dovednostJS)
