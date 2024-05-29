import './navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="../../../public/logo.svg" alt="logo"/>
        <span>Maladmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className='icon' />
        <img src="/app.svg" alt="" className='icon' />
        <img src="/expand.svg" alt="" className='icon' />
        <div className="notification">
          <img src="../../../public/notifications.svg" alt="" className='icon' />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
                alt="" 
                className='icon' />
          <span>User</span>
        </div>
        <img src="../../../public/settings.svg" alt="" className='icon' />
      </div>
    </div>
  )
}
