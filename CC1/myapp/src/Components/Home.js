import {Routes,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Home() {
    return (
      <div>
       <header>
          <h1>Toy Store</h1>
          <nav>
              <ul>
                <Link to = '/'></Link>
                  <li>Home</li>
                  <Link to = '/login'>
                  <li>Login</li>
                  </Link>
                  <Link to ="/register">
                  <li>Register</li>
                    </Link>  
              </ul>
          </nav>
      </header>
    
      <section class="main-content">
          <article class="product">
              <img src="https://img.freepik.com/free-photo/cute-teddy-bear-indoors-still-life_23-2151083636.jpg?w=1060&t=st=1702393651~exp=1702394251~hmac=d4caaf262f437ef0b38ea8031ce5b33d5ea66737bf26b605c2dacd8d4556f887" alt="Toy 1"/>
              <p class="price">$19.99</p>
              <button>Add to Cart</button>
          </article>
          <article class="product">
              <img src="https://cdn.pixabay.com/photo/2015/11/26/17/59/toys-1064262_1280.jpg" alt="Toy 2"/>
              <p class="price">$24.99</p>
              <button>Add to Cart</button>
          </article>
          <article class="product">
            <img src="https://img.freepik.com/premium-photo/colorful-toys-collection-desk_488220-3796.jpg?w=1060" alt="Toy 3"/>
            <p class="price">$18.99</p>
            <button>Add to Cart</button>
          </article>
          <article class="product">
            <img src="https://img.freepik.com/free-photo/rabbit-sits-purple-curtain-with-easter-eggs-it_1340-24121.jpg?t=st=1702393793~exp=1702397393~hmac=ac9825d67a4bafaa7013457bf0c5ab91caa13bf1d310e651237190d1116dac98&w=1060" alt="Toy 4"/>
            <p class="price">$15.99</p>
            <button>Add to Cart</button>
          </article>
          <article class="product">
            <img src="https://img.freepik.com/free-photo/rubber-ducks-arrangement-still-life_23-2150673551.jpg?w=1060&t=st=1702393917~exp=1702394517~hmac=8108432676d31c92072e852b61456b9f74bf063ed62027470ba38082717f5665" alt="Toy 5"/>
            <p class="price">$16.8</p>
            <button>Add to Cart</button>
          </article>
          <article class="product">
            <img src="https://img.freepik.com/premium-photo/3d-rendering-colorful-beach-ball_493806-8717.jpg?w=996" alt="Toy 6"/>
            <p class="price">$29.8</p>
            <button>Add to Cart</button>
          </article>
          <article class="product">
            <img src="https://img.freepik.com/premium-vector/toys-icons-set_1284-3024.jpg?w=900" alt="Toy 7"/>
            <p class="price">$22.8</p>
            <button>Add to Cart</button>
          </article>
          <article class="product">
            <img src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=1060&t=st=1702395037~exp=1702395637~hmac=3383bc870713aa7341643f4e034a311da51c3e62726ad9d5a0487552a12d15d0" alt="Toy 8"/>
            <p class="price">$18.98</p>
            <button>Add to Cart</button>
          </article>
          <article class="product">
            <img src="https://img.freepik.com/free-photo/fresh-tasty-cake-shape-pig_144627-21280.jpg?w=900&t=st=1702395758~exp=1702396358~hmac=cfe7161f815d650f774db5e5043915bad0bb385ebcd21c036328a7090b1870f1" alt="Toy 9"/>
            <p class="price">$22.34</p>
            <button>Add to Cart</button>
          </article>
      </section>
      <footer>
          <p>&copy; 2023 Toy Store</p>
      </footer>
      </div>
    );
  }
  
  export default Home;
  