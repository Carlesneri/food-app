import Image from "next/image"

export const IngredientImage = ({
	source,
	name,
	onError = () => {},
	width = 100,
	height = 64,
}: {
	source: string
	name: string
	onError?: () => void
	width?: number
	height?: number
}) => {
	const imgSrc = `https://spoonacular.com/cdn/ingredients_100x100/${source}`

	return (
		<Image
			priority
			onError={onError}
			src={imgSrc}
			width={width}
			height={height}
			objectFit="scale-down"
			alt={name}
		/>
	)
}
