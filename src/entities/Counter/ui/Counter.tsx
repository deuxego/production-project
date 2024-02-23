import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { counterActions } from '../model/slice/counterSlice';
import Button from 'shared/ui/Button';

export const Counter = () => {
  const { count } = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className="flex p-5 gap-2">
      <Button color="success" onClick={increment}>
        Increment
      </Button>
      <h1 className="text-semibold text-2xl">{count}</h1>
      <Button color="error" onClick={decrement}>
        Decrement
      </Button>
    </div>
  );
};
