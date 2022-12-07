import './faq.css';


function App() {
  return (
    <>
    
    <main className="faq">
        
        <div className="faq_logo_holder">
        <div className="faq__logo">
          <img src="https://bobmatyas.github.io/fm-faq-accordion/images/illustration-woman-online-mobile.svg" className="faq_logo_image"/>
          <img src="https://bobmatyas.github.io/fm-faq-accordion/images/illustration-box-desktop.svg" alt="" className="faq_logo_image "/>
        </div>
        </div>
        
        <div className="faq__holder">
        <h1 className="faq__heading">FAQ</h1>
       
        <details className="faq__detail">
          <summary  className="faq_summary"><span className="faq_question">How to I signup</span></summary>
          <p className="faq__text">You can signup by clicking the signup button on the login page</p>
        </details>
        
        <details className="faq__detail">
            <summary  className="faq_summary"><span className="faq_question">How return and refunds work</span></summary>
            <p className="faq__text">After you retrun a product we'll make sure that the pick up is on time and you will get the refund within 8-9 business days</p>
        </details>
      
        <details className="faq__detail">
          <summary  className="faq_summary"><span className="faq_question">What if my order taking longer time to deliver than usual</span></summary>
          <p className="faq__text">In this case you can directly contact us through email we'll get back to you soon regarding the order.</p>
        </details>  
      
        <details className="faq__detail">
          <summary  className="faq_summary"><span className="faq_question">How do I reset my password?</span></summary>
          <p className="faq__text">Click “Forgot password” from the login page or “Change password” from your profile page.</p>
          <p className="faq__text">A reset link will be emailed to you.</p>
        </details>  
        
        <details className="faq__detail">
          <summary  className="faq_summary"><span className="faq_question">Can I cancel my Order once placed</span></summary>
          <p className="faq__text">Yes! Send us a message that you want to cancel the product we'll issue your request.</p>
        </details> 

        <details className="faq__detail">
          <summary  className="faq_summary"><span className="faq_question">What if my payments gets faild</span></summary>
          <p className="faq__text">That will not be an issue your money will remain yours either the debited money will come to us or it will reflect back to your account.</p>
        </details>
        
        <details className="faq__detail">
          <summary  className="faq_summary"><span className="faq_question">Do you provide additional support?</span></summary>
          <p className="faq__text">Email support is available 24/7. Phone lines are open during normal business hours. Check at Contact us section</p>
        </details>   
      
      </div>
      </main> 
        
      
    </>
  );
}

export default App;
