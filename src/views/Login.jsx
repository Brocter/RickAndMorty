import Form from '../components/Form/Form'


const Login = (props) => {
return(
    <div>
        <Form logIn={props.logIn}/>
    </div>
)
}

export default Login;