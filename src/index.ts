import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([10, 0, 3, -5, 6])
numbers.sort()
console.log(numbers.data)

const string = new CharactersCollection('Xaysi')
string.sort()
console.log(string.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(3)
linkedList.add(12)
linkedList.sort()
linkedList.print()