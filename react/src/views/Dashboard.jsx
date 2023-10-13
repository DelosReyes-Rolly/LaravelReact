import React from 'react'

export default function Dashboard() {
  return (
    <div className="card animated fadeInDown mb-4 border-start-lg border-start-success" style={{padding: "10px 20px 10px 20px"}}>
      <div style={{backgroundColor: "#ffffff", fontSize: "20px", fontWeight: "bold"}}>Thanks for the visit!</div><br/><br/>
      <div style={{textAlign:'left'}}>
        Hello user, <br/><br/>
        This is just a sample website created with Laravel as the backend and React as the front-end. 
        You can navigate to the 'Users' page to delete accounts, including your own. 
        Once deleted, you can register again to log in. 
        Please avoid using personal email addresses and real names, as this website is only a sample and is available to the public.<br/><br/>
        <br/>
        Regards,<br/><br/>
        Rolly A. Delos Reyes
      </div>
    </div>
  )
}
