const fs = require('fs')
const path = require('path')

module.exports = class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        const p = path.join(path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
        )
        fs.readFile(p, (err, fileContent) => {
            console.log(fileContent)
        })
    }

    // using static keyword to make sure we call fetchAll directly on the 
    // class itself AND NOT ON an instantiated object! 
    static fetchAll() {
        return products
    }
}