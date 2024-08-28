const Country = ({data}) => {
    console.log(data)
    const { status, region, flags} = data;
     
    return (
        <div>
            <p>Name : {region}</p>
            <p>{flags.png}</p>
        </div>
    );
};

export default Country;