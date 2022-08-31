import classNames from 'classnames';

export default function Button ({className, children, outline}) {
    return (
        <button
            className={classNames('button', className, {
                'button--outline': outline,
            })}
        >
            {children}
        </button>
    )
}