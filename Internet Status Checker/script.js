window.addEventListener("load", checkInternetConnection);

function checkInternetConnection(){
    const statusText = document.getElementById('statusText');
    const ipAddressText = document.getElementById('ipAddressText');
    const networkStrength = document.getElementById('networkStrength');


    statusText.textContent = 'Checking...';

    if(navigator.online){
        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{
            ipAddressText.textContent = data.ip;
            statusText.textContent = 'connected'

            const connection = navigator.connection;

            const networkStrength = connection?connection.downlink +'Mbps': 'Unknown';
            networkStrength.textContent = networkStrength;

        })
        .catch(()=>{
            statusText.textContent = 'Disconnected';
        ipAddressText.textContent = '-'
        networkStrength.textContent = '-'
        })

    }else{
        statusText.textContent = 'Disconnected';
        ipAddressText.textContent = '-'
        networkStrength.textContent = '-'
    }

}