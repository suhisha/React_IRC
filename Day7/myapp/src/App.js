import './Assets/Dashboard.css';
function App() {
    return (
      <div class="container">
      <div class="side-nav">
          <div class="user">
              <img src="https://i.ibb.co/LQc5grb/user.png" class="user-img"/>
              <div>
                  <h2>Farman Ali</h2>
                  <p>@farmanali6349</p>
              </div>
              <img src="https://i.ibb.co/XxnbtTD/blue-tick.png" class="blue-tick"/>
          </div>

          <ul>
              <li><img src="https://i.ibb.co/xKnDp3D/dashboard.png"/><p>Dashboard</p></li>
              <li><img src="https://i.ibb.co/w0rKrFt/memebers.png"/><p>Members</p></li>
              <li><img src="https://i.ibb.co/wN97xkd/messages.png"/><p>Messages</p></li>
              <li><img src="https://i.ibb.co/QQ0wmsj/video-chat.png"/><p>Video Chat</p></li>
              <li><img src="https://i.ibb.co/b7qLHwG/projects.png"/><p>Projects</p></li>
              <li><img src="https://i.ibb.co/T1ngrm8/rewards.png"/><p>Rewards</p></li>
              <li><img src="https://i.ibb.co/NWK9B0J/reports.png"/><p>Report</p></li>
              <li><img src="https://i.ibb.co/fqrBhpH/setting.png"/><p>Setting</p></li>
          </ul>

          <ul>
              <li><img src="https://i.ibb.co/nBhzgkh/logout.png"/><p>Logout</p></li>
          </ul>
      </div>
  </div>
    );
}
export default App;
