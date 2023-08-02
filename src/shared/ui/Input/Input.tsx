import React, {
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";

// исключили, тк по умолчанию onChange принимает событие, а нам нужна строка. переопределили.
type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const refInput = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const onFocus = () => setIsFocused(true);

  const onBlur = () => setIsFocused(false);

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      refInput.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(styles.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={styles.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={changeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          className={styles.input}
          ref={refInput}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
});
