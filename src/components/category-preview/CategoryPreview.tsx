import { FC } from 'react';
import { ProductCard } from '../../components';
import { CategoryItem } from '../../store/categories/category.types';
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './CategoryPreview.styles';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title to={title}>
        <h2>{title.toUpperCase()}</h2>
      </Title>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
