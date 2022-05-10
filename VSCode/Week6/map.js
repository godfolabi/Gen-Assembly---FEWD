const produce = [["kiwi", "pear", "cherry"], ["broccoli", "celery", "carrots"]];
produce
let result = produce.map(item => item.join(", "))
result
result = produce.map(item => item.reverse())
result
result = produce.map(item => item.slice(1))
result
produce
let lengths = produce.map(item => item.length)
lengths
lengths = produce.map(item => item.map(subitem => subitem.length))
lengths

// filter
produce
result = produce.filter(item => item.length > 2)
result