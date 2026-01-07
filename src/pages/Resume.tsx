import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Download } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import resumePDF from '@/assets/Resume/RJ_Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const container = document.getElementById('pdf-container');
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className='bg-resume h-[calc(100vh-57px)] flex flex-col items-center py-10 px-8 sm:px-12 md:px-16 border-x border-b border-color overflow-auto'>
      <div className='text-center mb-4 flex-shrink-0'>
        <h1 className='text-3xl sm:text-4xl font-bold text-primary'>
          My Resume
        </h1>
      </div>

      <div
        id='pdf-container'
        className='w-full flex items-start justify-center flex-col'
      >
        <Document file={resumePDF}>
          <Page
            pageNumber={1}
            width={containerWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className='border border-color'
          />
        </Document>

        <div className='mt-4 flex-shrink-0 w-full flex justify-center'>
          <a
            href={resumePDF}
            download='RJ_Resume.pdf'
            className='inline-flex items-center gap-2 text-[#81353B] x-button border border-color px-6 py-3 transition-transform font-semibold text-sm sm:text-base'
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
