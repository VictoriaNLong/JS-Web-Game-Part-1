let newImage = (img, left, bottom) => { //defines the arguments that will be accepted in the function body
    let object = document.createElement('img')
    object.src = img // tells the function to pull whatever is listed as the "img" when calling the function
    object.style.position = 'fixed'
    object.style.left = left + 'px' //tells the function to place the object to whatever "px" is listed as left when calling the function
    object.style.bottom = bottom + 'px' //tells the function to place the object to whatever "px" is listed as left when calling the function
    document.body.append(object)
    
    }
    
    let newItem = (img, left, bottom) => {
    let item = document.createElement('img')
    item.src = img
    item.style.position = 'fixed'
    item.style.left = left + 'px' 
    item.style.bottom = bottom + 'px' 
    document.body.append(item)
    
    item.addEventListener('dblclick', function(){
        item.remove()
    })
    
    }
    
    newImage('assets/green-character.gif', 100, 100) //invokes the newImage function with the first string as the "img", first number as "left", and second number as "bottom"
    newImage('assets/tree.png', 200, 300)
    newImage('assets/pillar.png', 350, 100)
    newImage('assets/pine-tree.png', 450, 200)
    newImage('assets/crate.png', 150, 200)
    newImage('assets/well.png', 500, 425)
    
    newItem('assets/sword.png', 500, 405) //invokes the newItem function with the first string as the "img", first number as "left", and second number as "bottom"
    newItem('assets/sheild.png', 165, 185)
    newItem('assets/staff.png', 600, 100)