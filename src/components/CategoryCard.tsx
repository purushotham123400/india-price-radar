
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`}>
      <Card className="h-full transition-all hover:shadow-lg border border-gray-200 hover:border-brand-orange">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-3xl">{category.icon}</span>
            {category.name}
          </CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Brands: {category.brands.join(', ')}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
