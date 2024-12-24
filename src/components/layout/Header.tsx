import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/3eb7ccb9-aa7b-4535-bfc0-c4d98385b6ce.png"
              alt="OK TANI Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-primary dark:text-white">OK TANI</span>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
              />
              <Moon className="h-4 w-4" />
            </div>

            <Link to="/login">
              <Button variant="outline" className="dark:border-gray-700 dark:text-white">
                Masuk
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Daftar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};