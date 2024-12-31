import AddressMap from "./AddressMap.tsx";

const Address = () => {
    const address = {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
        lat: 37.7749,
        lng: -122.4194
    };

    const mapContainerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: address.lat,
        lng: address.lng
    };

    return (
        <div>
            <div>
                <h2>Address Details</h2>
                <p>{address.street}</p>
                <p>{address.city}, {address.state} {address.zip}</p>
            </div>
            <AddressMap
                mapContainerStyle={mapContainerStyle}
                center={center}
            />
        </div>
    );
};

export default Address;