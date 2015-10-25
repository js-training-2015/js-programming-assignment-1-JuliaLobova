function solution1(A, B, C)
{
  return Math.ceil((B-A)/C);
}

function solution2(A, B)
{
  var maxXOR = 0;
  var curXOR, C;
  
  while(A<B)
  {
    C = A+1;
    while(C<=B)
    {
      curXOR =  A^C;
      if(curXOR>maxXOR)
      {
        maxXOR = curXOR;
      }
      C++;
    }
    A++;
  }
  return maxXOR;
}
