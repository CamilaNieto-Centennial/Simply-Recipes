import Example from "../sub-components/Example";

const Home = () => {
    return ( 
        <>
        <main className="page">
            <img className="subcontainer main-image" src="./assets/main.jpeg" alt="Main Image" />
            <Example/>
            <Example className="last-container"/>
        </main>
        </>
    );
}
 
export default Home;