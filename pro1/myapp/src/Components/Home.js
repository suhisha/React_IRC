import '../Assets/Home.css'
import {Link} from 'react-router-dom';

function Home()
{
    return(
    <>
    
 <div class="contaner">
  <div class="headbar">
    <div class="contactinfo">
    <p>Call Us: +917742883878</p> <p>Email: Toystore@gmail.com</p>
    </div>
    <div class="socialmedia">
      <img src="https://www.svgrepo.com/show/508977/twitter-3.svg" alt=""/>
    <img src="https://www.svgrepo.com/show/453774/instagram.svg" alt=""/>
      <img src="https://www.svgrepo.com/show/494365/youtube.svg" alt=""/>
    <img src="https://www.svgrepo.com/show/494304/facebook-rounded.svg" alt=""/>
  </div>
                              </div> 

  <div class="bar">
    <div class="servicetxt">
     <h3>ToyStore</h3>
     <Link className="col"to='/Login'><p>Login</p></Link>
     <Link className="col"to='/Reg'><p>Reg</p></Link>
     <Link className="col"to='/'><p>Home</p></Link>
      {/* <p>Contact</p> */}
{/* Dashboard */}
      <div class="area"></div>
  <nav class="main-menu">
    <ul>
      <li>
        <a href="https://jbfarrow.com">
          <i class="fa fa-home fa-2x"></i>
          <span class="nav-text">
            Categories
          </span>
        </a>

       </li>
      {/* <li class="has-subnav">
        <a href="#">
          <i class="fa fa-globe fa-2x"></i>
          <span class="nav-text">
           <Link to="/Services" className="nav-link">Bus Services</Link>
          </span>
        </a>  */}

      {/* </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-comments fa-2x"></i>
          <span class="nav-text">
           <Link to="/Services1" className="nav-link">Group Hub Forums</Link>
          </span>
        </a>

      </li> */}
      {/* <li class="has-subnav">
        <a href="#">
          <i class="fa fa-camera-retro fa-2x"></i>
          <span class="nav-text">
          <Link to="/poem" className="nav-link">poem</Link>
          </span>
        </a>

      </li> */}
      <li>
        <a href="#">
          <i class="fa fa-film fa-2x"></i>
          <span class="nav-text">
            <Link className="col" to='/Doll'>
            Dolls
            </Link>
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-book fa-2x"></i>
          <span class="nav-text">
            <Link className="col"to='/Remote'>
            Remote control dolls
            </Link>
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-cogs fa-2x"></i>
          <span class="nav-text">
            <Link className="col"to='/wooden'>
            wooden dolls
            </Link>
          </span>
        </a>
      </li>
      {/* <li>
        <a href="#">
          <i class="fa fa-map-marker fa-2x"></i>
          <span class="nav-text">
            Member Map
          </span>
        </a>
      </li> */}
      {/* <li>
        <a href="#">
          <i class="fa fa-info fa-2x"></i>
          <span class="nav-text">
            Documentation
          </span>
        </a>
      </li> */}
    </ul>

    <ul class="logout">
      <li>
        <a href="#">
          <i class="fa fa-power-off fa-2x"></i>
          <span class="nav-text">
            Logout
          </span>
        </a>
      </li>
    </ul>
  </nav>
{/* end */}
    </div>
    <div class="cartphoto">
      <p>Cart</p>
      <img src="https://www.svgrepo.com/show/511129/shopping-cart-01.svg" alt=""/>
  </div>
                      </div>
  
  <div class="body1">
    <div class="bodytext">
      <div class="txt1">Say Hello to Toystore!</div>
      <div class="txt2">Every TOY!! Every  JOY!!</div>
     <div class="txt3">Open Catalog</div> 
    </div>
                 </div>
{/*   
  <div class="toysshoping">
    <div class="tedebear1">
      <div class="bearimg1">
        <img src="https://purepng.com/public/uploads/large/purepng.com-teddy-bearobjectstoybearteddy-beardoll-631521882709zx0uu.png" alt=""/>
      </div>
      <div class="beartxt1">
        <div class="stuffed">Stuffed Animals</div>
        <div class="shopnow">Shop Now</div>
      </div>
                  </div>
    
     <div class="tedebear2">
      <div class="bearimg2">
        <img src="https://www.freepnglogos.com/uploads/teddy-bear-png/teddy-bear-png-transparent-images-png-only-5.png" alt=""/>
      </div>
      <div class="beartxt2">
        <div class="wooden">Wooden Toys</div>
        <div class="shopnow">Shop Now</div>
      </div>
    </div>
    
                </div>
  
  <div class="stuffedanimals">
    <div class="headingstuff">
    <h3>Stuffed Animals</h3></div>
    <div class="buttontag">
    <button>See All Toys
    <img src="https://www.svgrepo.com/show/533621/arrow-sm-right.svg" alt=""/></button>
    </div>
    </div>
  <div class="underlineanimals">
              </div>
  
  <div class="bearcard">
    <div class="cardbear1">
      <div class="bearimage"><img src="https://www.pngmart.com/files/10/Red-Teddy-Bear-PNG-Photos.png" alt=""/></div>
      <div class="teddybear">Teddy Bear</div>
      <div class="price30">$30.00 USD</div>
    </div>
        <div class="cardbear1">
      <div class="bearimage2"><img src="https://png.pngtree.com/png-clipart/20230423/original/pngtree-cute-teddy-dog-png-image_9092535.png" alt=""/></div>
      <div class="teddydog">Teddy Dog</div>
      <div class="price30">$38.00 USD</div>
    </div>
        <div class="cardbear1">
      <div class="bearimage3"><img src="https://pngimg.com/d/teddy_bear_PNG82.png" alt=""/></div>
      <div class="teddybearr">Teddy Bear</div>
      <div class="price30">$24.00 USD</div>
    </div>
        <div class="cardbear1">
      <div class="bearimage4"><img src="https://static.vecteezy.com/system/resources/previews/024/724/518/original/stuffed-cat-toy-isolated-on-transparent-background-fluffy-soft-cute-kitten-toy-generative-ai-png.png" alt=""/></div>
      <div class="teddycat">Teddy Cat</div>
      <div class="price30">$26.00 USD</div>
    </div>
              </div>
  
  
    <div class="stuffedanimals">
    <div class="headingstuff">
    <h3>Wooden Toys</h3></div>
    <div class="buttontag">
    <button>See All Toys
    <img src="https://www.svgrepo.com/show/533621/arrow-sm-right.svg" alt=""/></button>
    </div>
    </div>
  <div class="underlineanimals">
              </div>
  
  
   <div class="bearcard">
    <div class="cardbear1">
      <div class="bearimage"><img src="https://www.pngmart.com/files/10/Red-Teddy-Bear-PNG-Photos.png" alt=""/></div>
      <div class="teddybear">Teddy Bear</div>
      <div class="price30">$30.00 USD</div>
    </div>
        <div class="cardbear1">
      <div class="bearimage2"><img src="https://png.pngtree.com/png-clipart/20230423/original/pngtree-cute-teddy-dog-png-image_9092535.png" alt=""/></div>
      <div class="teddydog">Teddy Dog</div>
      <div class="price30">$38.00 USD</div>
    </div>
        <div class="cardbear1">
      <div class="bearimage3"><img src="https://pngimg.com/d/teddy_bear_PNG82.png" alt=""/></div>
      <div class="teddybearr">Teddy Bear</div>
      <div class="price30">$24.00 USD</div>
    </div>
        <div class="cardbear1">
      <div class="bearimage4"><img src="https://static.vecteezy.com/system/resources/previews/024/724/518/original/stuffed-cat-toy-isolated-on-transparent-background-fluffy-soft-cute-kitten-toy-generative-ai-png.png" alt=""/></div>
      <div class="teddycat">Teddy Cat</div>
      <div class="price30">$26.00 USD</div>
    </div>
              </div> */}
  
<div class="footer">
 <div class="toystorefooter">Toy Store</div>
 <div class="footerhome">
   <p>Home</p>
   <p>Catalog</p>
   <p>Delivery</p>
   <p>About</p>
   <p>Contacts</p>
 </div> 
      <div class="socialmedia">
      <img src="https://www.svgrepo.com/show/508977/twitter-3.svg" alt=""/>
    <img src="https://www.svgrepo.com/show/453774/instagram.svg" alt=""/>
      <img src="https://www.svgrepo.com/show/494365/youtube.svg" alt=""/>
    <img src="https://www.svgrepo.com/show/494304/facebook-rounded.svg" alt=""/>
  </div>
  
</div> 
 </div> 
</>
    )
}
export default Home;