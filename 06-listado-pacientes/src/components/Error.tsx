
const Error = ({ children }: { children: React.ReactNode }) => {
	return (
		<p className="my-2 text-red-600 font-bold text-sm">{ children }</p>
	)
}

export default Error