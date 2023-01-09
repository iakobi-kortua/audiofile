// For Burger Bar
let burgerBar = document.querySelector('.burger-bar');
let activeBar = document.querySelector('.for-burger-bar');

burgerBar.addEventListener('click', function(){
    activeBar.classList.toggle('hidden');
})
// --------------- //

// For Modal
var modal = document.querySelector("#myModal");
var cart = document.querySelector(".cart");

cart.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// --------------- //

// For Add To Cart
let addItemInCart = document.querySelector('.modal-content')
let bMarkIItwo = document.getElementById('bMarkIItwo');

bMarkIItwo.addEventListener('click', function () {
  addItemInCart.innerHTML = ` <div class="whole-add-item">
                                <div class="cart-remove-all">
                                    <h3>cart (1)</h3>
                                    <button>Remove all</button>
                                </div>

                                <div class="cart-product">
                                    <div class="img-text">
                                        <img src="./images/cart/image-xx99-mark-two-headphones.jpg">
                                        <div class="h5-p">
                                            <h5>XX99 MK II</h5>
                                            <p>$ 2,999</p>
                                        </div>
                                    </div>
                                    <div class="sell-section">
                                        <div class="plus-minus">
                                            <div>-</div>
                                            <div>1</div>
                                            <div>+</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="total-price">
                                    <p>TOTAL</p>
                                    <h5>$ 2,999</h5>
                                </div>
                                <button class="button-1 btn-checkout"><a href="/checkout.html">checkout</a></button>
                              </div>`
});