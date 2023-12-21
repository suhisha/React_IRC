import {Routes,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Home() {
    return (
      <div>
<Link></Link>
{/* <nav class="nav">
<ul>
  <li><a href="#" class="logo">
    <img src="https://t3.ftcdn.net/jpg/03/04/90/30/360_F_304903020_Norp4P6o19mbV9p7oOeNPThiNnce3ZHH.jpg"/>
    <span class="nav-item">Admin</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-menorah"></i>
    <span class="nav-item">Dashboard</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-comment"></i>
    <span class="nav-item">Message</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-database"></i>
    <span class="nav-item">Report</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-chart-bar"></i>
    <span class="nav-item">Attendance</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-cog"></i>
    <span class="nav-item">Setting</span>
  </a></li>
  <li><a href="#" class="logout">
    <i class="fas fa-sign-out-alt"></i>
    <span class="nav-item">Log out</span>
  </a></li>
</ul>
</nav> */}


      
    
<header>
    <h1>Toy Store</h1>
  </header>
  
  <main>
    <section class="products">
      <div class="product">
        <img src="https://img.freepik.com/free-vector/flat-design-christmas-toys-collection_23-2148774206.jpg?w=1060&t=st=1703002436~exp=1703003036~hmac=cbbc8a0a3d9df740ce7f281afa649b5859e985b908b1997439a17c4e00f067d8" alt="Toy 1"/>
        <h2>Toy 1</h2>
        <p>$19.99</p>
        <button>Add to Cart</button>
      </div>
      
      <div class="product">
        <img src="https://i.ebayimg.com/images/g/DGEAAOSwcudlfdD1/s-l1600.jpg" alt="Toy 2"/>
        <h2>Toy 2</h2>
        <p>$24.99</p>
        <button>Add to Cart</button>
      </div>
      
    </section>
  </main>

  <footer>
    <p>&copy; 2023 Toy Store</p>
  </footer>
  </div>

    );
  }
  
  export default Home;
  