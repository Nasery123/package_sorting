const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs',
    id: '12seSA',
    city: 'Nampa'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk',
    id: '12seFD',
    city: 'Meridian'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147',
    id: '12seSA',
    city: 'Nampa'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145',
    id: '12seSD',
    city: 'Nampa'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z',
    id: '12seCS',
    city: 'Eagle'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz',
    id: '12seQW',
    city: 'Boise'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367',
    id: '12se',
    city: 'Nampa'
}]
// let missingPackage = null;
function filterByWeight() {
    const heavyPackages = packages.filter(p => p.weight >= 5)
    draw(heavyPackages)
    // pause here
}

function filterByPriority() {

    const priorityPackages = packages.filter(p => p.priorityLevel == 'standard' || p.priorityLevel == 'free')
    draw(priorityPackages)

}
function filterByFragile() {
    const fragilePackages = packages.filter(p => p.isFragile)
    draw(fragilePackages)
}
function filterByCity(city) {
    const packagesToCity = packages.filter(p => p.city == city);
    //const packagesToMeridian = packages.filter(p.city == 'Meridian');
    //draw(packagesToMeridian)
    draw(packagesToCity)
}

function draw(filteredPackages) {
    let template = ""
    filteredPackages.forEach(p => {
        template += `
        <div class="first col-5">
            <p>Name: <b>${p.to}</b></p>
            <p>trackingNumber: ${p.trackingNumber} 📦</p>
            <p> trackingID: ${p.id} </p>
            <p> City: ${p.city}</p>
        </div>
        <hr>
        `
    })
    document.getElementById('template').innerHTML = template
}

function selectRandombox() {
    const randomIndex = Math.floor(Math.random() * packages.length)
    packages = packages[randomIndex]
}
