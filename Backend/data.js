import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
            name:'damian',
            email:'damianorina17@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },{
            name:'john',
            email:'damiannyandaro@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        }
    ],
    products: [
        {
            //_id:'1',
            name:'Nike slim shirt',
            slug:'nike-slim-shirt',
            Category: 'shirts',
            image: 'https://i.pinimg.com/236x/fc/1a/d0/fc1ad0e5bdfcc573bd1c9784b8f2384b.jpg',
            price: 1200,
            countInStock: 14,
            brand: 'nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {
            //_id:'2',
            name:'Nike slim pant',
            slug:'nike-slim-pant',
            Category: 'pants',
            image: 'https://i.pinimg.com/236x/c5/76/da/c576dabf8fbc2738ca04adc88712d8ef.jpg',
            price: 1200,
            countInStock: 10,
            brand: 'puma',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality pant'
        },
        {
            //_id:'3',
            name:'Nike slim shoe',
            slug:'nike-slim-shoe',
            Category: 'shoes',
            image: 'https://i.pinimg.com/236x/3e/5f/b5/3e5fb594a4f803a9c12aca434eda763e.jpg',
            price: 1200,
            countInStock: 16,
            brand: 'nike',
            rating: 4.5,
            numReviews: 11,
            description: 'high quality shoe'
        },
        {
            //_id:'4',
            name:'addidas slim shoe',
            slug:'addidas-slim-shoe',
            Category: 'shoes',
            image: 'https://i.pinimg.com/236x/01/16/37/011637a289e407972b469e57d3b069fd.jpg',
            price: 1200,
            countInStock: 11,
            brand: 'nike',
            rating: 4.5,
            numReviews: 13,
            description: 'high quality shoe'
        },

    ]
}

export default data;