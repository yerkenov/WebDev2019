if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    arr=list(arr)
    m=max(arr)
    mm=min(arr)
    for i in range(0,n):
      if arr[i]!=m:
        if mm<arr[i]:
          mm=arr[i]
    print(mm)