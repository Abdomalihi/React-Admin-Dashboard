import './topBox.scss'
import { topDealUsers } from '../../../data'

export default function TopBox() {
  return (
    <div className='topBox'>
      <h1>Top Deals</h1>
      <div className="list">
        {
          topDealUsers.map((user) => (
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={user.img} alt="User Image" />
                <div className="userDetail">
                  <p className="name">{user.username}</p>
                  <p className="email">{user.email}</p>
                </div>
              </div>
              <span className="amount">${user.amount}</span>
            </div>
          ))
        }
      </div>   
    </div>
  )
}
