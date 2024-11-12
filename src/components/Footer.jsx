import React from 'react'

function Footer() {
    return (
        <footer class="bg-dark text-white py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <p>&copy; 2024 [GO TO GYM]. All rights reserved.</p>
                    </div>
                    <div class="col-md-6">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="#" class="text-white">Facebook</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#" class="text-white">Instagram</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#" class="text-white">Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer