document.addEventListener("DOMContentLoaded", function () {
    var map = L.map("map").setView(
        [-21.46849607932378, -51.50088985976688],
        13
    )

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    }).addTo(map)

    L.marker([-21.46849607932378, -51.50088985976688])
        .addTo(map)
        .bindPopup("<b>Chácara SPA PEC</b><br>O local do evento!")
        .openPopup()
})