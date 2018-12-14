module.exports = {
    random : ( array ) => {
        let arrayLength = array.length, holder, randomVariable;

        while ( arrayLength ){
            randomVariable = Math.floor( Math.random() * arrayLength-- );
            holder = array[ arrayLength ]; 
            array[ arrayLength ] = array[ randomVariable ];
            array[ randomVariable ] = holder;
        }

        return array; 
    }
}