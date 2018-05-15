var text = `Valentine Oragbakosi <v.oragbakosi@genesgetstechhub.com> +234-7032434429
Chinonso Williams Junior <c.williams@genesgetstechhub.com> +234-9034464230
Ndife Uchenna <n.uchenna@genesgetstechhub.com> +234-8052464529
Ehiogu Chika Josephine <c.josephine@genesgetstechhub.com> +234-7022454620
Chidera Jennifer <c.jennifer@genesgetstechhub.com> +234-8032434425
Nwosu Ifeoma Lucia <l.ifeoma@genesgetstechhub.com> +234-9032434424
Ibe Agwu <i.ogele@genesgetstechhub.com> +234-7032434427`
//Given above text write a function(s) that returns arrays of names, emails and phone numbers

var email = [ ]; //creating an empty array
//spliting the text string into a substring and return them as an array
for (var get of text.split('\n')){ 
    //attach new elements to an array and return the substring at specified position
        email.push(get.substring(get.indexOf('<'), get.indexOf('>')));
        //iterating on each element of the array, and cut the first letter of each element
        var crop = email.map(cut => cut.slice(1)); 
    }
console.log(crop)


var phoneNum = [ ];//creating an empty array
//spliting the text string into a substring and return them as an array
for (var get of text.split('\n')){
     //attach new elements to an array and return the substring at specified position
    phoneNum.push(get.substring(get.indexOf('+'), get.length));
}
console.log(phoneNum)


var names = [ ];//creating an empty array
//spliting the text string into a substring and return them as an array
for(var get of text.split('\n')){ 
     //attach new elements to an array and return the substring at specified position
    names.push(get.substring(0, get.indexOf('<')));
}
console.log(names) 







