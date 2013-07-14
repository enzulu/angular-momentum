# mapper function
# outputs a function that does a function to each element

mapper = (func) ->
  (list) ->
    result = []
    for value, index in list
      result.push func(value, index, list)
    result

x = [1 ... 30]
testShit = mapper (m, i, x) -> 
    prev = if i is 0 then null else x[(i-1)]
    if prev is null then m else m - prev
console.log(testShit(x))
 

# filterer function
# outputs a function that outputs filtered elements based on a function
filterer = (func) ->
  (list) ->
     out = []
     for e in list
       if func(e) is true
         out.push(e)
     out
 
isPositive = (n) -> n%2 == 0
isPositiveFilter = filterer isPositive
p = isPositiveFilter [-1, 1, -100, 100]
console.log(p)
 
 # callbacks n shit
guessOnce = (n, highF, lowF, equalF) ->
  v = parseInt prompt("Enter guess:")
  if v > n then highF(n)
  else if v < n then lowF(n)
  else equalF(n)

highF = (n) ->
   alert "Too high..."
   guessTheNumber n

lowF = (n) ->
   alert "Too low..."
   guessTheNumber n

equalF = (n) ->
   alert "cool"
   
guessTheNumber = (n) ->
  guessOnce(n, highF, lowF, equalF)

guessTheNumber(42)     