const PrettyPrintJson = ({ data }) => (<div><pre>{
    JSON.stringify(data, null, 2)}</pre></div>);


export default PrettyPrintJson