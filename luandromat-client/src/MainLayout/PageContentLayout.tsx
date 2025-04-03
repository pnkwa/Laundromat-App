import classNames from 'classnames'

interface PageContentLayoutProps {
  children?: React.ReactNode
}

export const PageContentLayout = ({ children }: PageContentLayoutProps) => {
  const buttonStyle = classNames(
    'bg-secondary btn btn-sm border-solid border-2 border-black btn-ghost w-12 h-12 xs+:w-12',
    'xs+:h-12 flex items-center justify-center my-0 mx-4 sm:my-12 sm:mx-0',
    'hover:border-black'
  )

  return (
    <div className="bg-primary-content h-full flex flex-col sm:flex-row overflow-hidden">
      <div
        className={classNames(
          'flex-1 overflow-y-auto p-4  flex flex-col h-dvh w-full'
        )}
      >
        {children}
      </div>
    </div>
  )
}
