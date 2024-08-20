const Dog = ({dogname, breed, age, setFavDog}) => {


    return ( <>
    <p onClick={() => setFavDog(dogname)}>
        {dogname} is a {breed} which is {age} years old.</p>
    </> );
}
 
export default Dog;