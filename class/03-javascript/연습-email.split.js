const email='codecamp@gmail.com'
undefined
email.includes('@')
true
email.split('@')
(2) ['codecamp', 'gmail.com']
email
'codecamp@gmail.com'
const usermail =email.split('@')[0]
undefined
usermail
'codecamp'
const company = email.split('@')[1]
undefined
company
'gmail.com'
const maskingmail=[]
undefined
maskingmail.push(usermail[0])
1
maskingmail
['c']
maskingmail.push(usermail[1])
2
maskingmail.push(usermail[2])
3
maskingmail.push(usermail[3])
4
maskingmail
(4) ['c', 'o', 'd', 'e']
maskingmail.push('*')
5
maskingmail
(5) ['c', 'o', 'd', 'e', '*']
maskingmail.push('*')
6
maskingmail.push('*')
7
maskingmail.push('*')
8
maskingmail.push('*')
9
maskingmail.pop
ƒ (){const t=this.length>0,n=e.apply(this,arguments),i=this.$fastController;return void 0!==i&&t&&i.addSplice(o(this.length,[n],0)),n}
maskingmail.pop()
'*'
maskingmail
(8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingmail.join('')+'@'+company
'code****@gmail.com'
const result=maskingmail.join('')+'@'+company
undefined
result
'code****@gmail.com'