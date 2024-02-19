fetch("https://api.escuelajs.co/api/v1/categories")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class="card mx-auto border border-warning border-4 mb-3 shadow p-3 mb-5 bg-body rounded" style="max-width: 18rem;">
                        <div class="col border border-dark border-2 mb-3 shadow p-3 mb-5 rounded-circle ratio ratio-1x1">
                            <img src="${db.image}" class="card-img-top" alt="${db.name}">
                        </div>
                            <div class="card-body">
                                <h5 class="card-title text-center text-secondary">${db.name}</h5>
                            </div>
                        </div>
                    </div>`
            }
        document.getElementById("categoria").innerHTML = card
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    });