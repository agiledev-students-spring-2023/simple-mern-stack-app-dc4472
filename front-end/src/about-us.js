import {useEffect, useState} from 'react'
import axios from 'axios'
import myImage from './personal-pic.jpg'
const AboutUs = props =>{
    /*
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState('')
    //const [messages, setMessages] = useState([])
    const [myinfo, setinfo] = useState('')
    const [myImage, setImage]=useState('')
  */

     /**
   * A nested function that fetches messages from the back-end server.
   */

  /*
  const fetchMessages = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/messages`)
      .then(response => {
        // axios bundles up all response data in response.data property
        const messages = response.data.messages
        setMessages(messages)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true)
      })
  }

  /**
   * A nested function used to add a new message to the list of messages
   * @param {*} message The new message to add to the list
   */

  /*
  const addMessageToList = message => {
    const newMessages = [...messages, message] // make an array with all the old values plus the new one
    setMessages(newMessages) // save the new array
  }

  // set up loading data from server when the component first loads
  useEffect(() => {
    // fetch messages this once
    fetchMessages()

    // set a timer to load data from server every n seconds
    const intervalHandle = setInterval(() => {
      fetchMessages()
    }, 5000)

    // return a function that will be called when this component unloads
    return e => {
      // clear the timer, so we don't still load messages when this component is not loaded anymore
      clearInterval(intervalHandle)
    }
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads

    */
    


    return(
        <> 
            <h1>About me: David Chen</h1>
            {error && <p className="MessageForm-error">{error}</p>}
            <img src={myImage} alt='' style={{maxHeight:"500px"}}/>
            <p>Hi! My name is David Chen. I am a math and computer science major. It is a lot of work. So here is a picture of me in Florida 
            last summer. Because why not?

            </p>
        
        
        </>

    )

  




}

export default AboutUs

