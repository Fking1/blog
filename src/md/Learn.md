# Vuex学习笔记(状态管理)

## State. 
> Creating a singleton state tree shared in whole application. We can only mutate store’s state in commit.

## Getters(类似计算属性)
> Sometimes we may need to compute derived state based on store state and used in multiple.(计算衍生状态并且在多处被反复用到,例如过滤器)

## Mutations(同步)
> The only way to actually change state in a Vuex store is by committing a mutation.

## Actions(可为异步)
> Actions are similar to mutations, the differences being that:
* Instead of mutating the state, actions commit mutations.
* Actions can contain arbitrary asynchronous operations.

## Modules
> Dealing with bloated state tree.
To help with that, Vuex allows us to divide our store into modules. Each module can contain its own state, mutations, actions, getters, and even nested modules