const Button = (buttonParams) => {
    // destructuring
    const { textColor, buttonText } = buttonParams;

    return (
        <>
            <button style={{ color: textColor }}>{buttonText}</button>
        </>
    );
};

export default Button;
