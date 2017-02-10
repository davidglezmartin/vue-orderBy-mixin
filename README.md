# vue-orderBy mixin

Sort a array object with a custom field

## Install

``` bash
$ npm install vue-orderby-mixin
```
## Usage
```javascript
this.orderBy(obj, column, type)

	obj => Array object
	column => A custom field for sorting
	type => ASC or DESC
    
```
## Example
```javascript
import orderBy from 'vue-orderby-mixin'
	export default {
		data () {
	    	return {
	    		users: [
        	  		{ id: 1, name: 'John' },
        	  		{ id: 2, name: 'Jane' }
        		],
	    	}
	    },
		mixins: { orderBy },
		methods: {
			example () {
				this.orderBy(this.users, 'name', 'ASC')
			}
		}
	}
```
#### Result

| id | name |
|----|------|
| 2  | Jane |
| 1  | John |