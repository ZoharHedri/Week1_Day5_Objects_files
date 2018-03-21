var reservations = {
  'Bob': {
     claimed: false },
  'Ted': {
     claimed: true 
    }
}



var claimReservation = function () {
    // write your code here!
    
    //alert(reser); //reser is empty -> i will not send reservations to the func
    
    var arr = Object.keys(reservations)// array of the fields/keys of the object -> strings

   
    for (var i = 0; i < arr.length; i++)
    {
        // Change your code so that 'ted' and 'Ted' or even 'TeD' is all the same -> with toUpperCase func
        if (name.toUpperCase() === arr[i].toUpperCase())
        {
          if (reservations[arr[i]].claimed) //if is Ted
            alert("Hi " + name + " your reservations claimed");
          else ////if is Bob
            alert("welcome " + name);

            return;
        }
        
        
    } //for

    alert("there is nothing under your name");

    /* if someone doesn't have a reservation,
    add it to the reservations object and set "claimed" to true for that person.
    Alert them of their new reservation */

    reservations[name] = { claimed: true }; 
    alert("new reservation " + name);

} //claimReservation

var name = prompt('Please enter the name for your reservation');
//alert(reservations); //reservations is empty
claimReservation();
