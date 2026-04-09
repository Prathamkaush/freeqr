"use client";

import { useState } from "react";
import QRCode from "qrcode";
import jsPDF from "jspdf";
import { motion } from "framer-motion";
import { Download, Plus, Trash2 } from "lucide-react";

interface BulkItem {
  id: string;
  type: 'URL' | 'TEXT';
  content: string;
  label: string;
}

export default function BulkQRGenerator() {
  const [items, setItems] = useState<BulkItem[]>([
    { id: '1', type: 'URL', content: '', label: 'Item 1' }
  ]);
  const [generatedQRs, setGeneratedQRs] = useState<{[key: string]: string}>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const addItem = () => {
    const newItem: BulkItem = {
      id: Date.now().toString(),
      type: 'URL',
      content: '',
      label: `Item ${items.length + 1}`
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    const newQRs = { ...generatedQRs };
    delete newQRs[id];
    setGeneratedQRs(newQRs);
  };

  const updateItem = (id: string, field: keyof BulkItem, value: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const generateAll = async () => {
    setIsGenerating(true);
    const newQRs: {[key: string]: string} = {};

    for (const item of items) {
      if (item.content.trim()) {
        try {
          const qr = await QRCode.toDataURL(item.content, {
            width: 200,
            margin: 2,
            color: { dark: '#000000', light: '#ffffff' }
          });
          newQRs[item.id] = qr;
        } catch (error) {
          console.error(`Failed to generate QR for ${item.label}:`, error);
        }
      }
    }

    setGeneratedQRs(newQRs);
    setIsGenerating(false);
  };

  const downloadPDF = async () => {
    const pdf = new jsPDF();
    let yPosition = 20;

    for (const item of items) {
      if (generatedQRs[item.id]) {
        // Add label
        pdf.setFontSize(14);
        pdf.text(item.label, 20, yPosition);
        yPosition += 10;

        // Add QR code
        pdf.addImage(generatedQRs[item.id], 'PNG', 20, yPosition, 50, 50);
        yPosition += 60;

        // Add content text
        pdf.setFontSize(10);
        const contentLines = pdf.splitTextToSize(item.content, 170);
        pdf.text(contentLines, 20, yPosition);
        yPosition += contentLines.length * 5 + 10;

        // Add page break if needed
        if (yPosition > 250) {
          pdf.addPage();
          yPosition = 20;
        }
      }
    }

    pdf.save('bulk-qr-codes.pdf');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Bulk QR Code Generator</h2>
        <p className="text-slate-600">
          Generate multiple QR codes at once. Perfect for businesses, events, and mass distribution.
        </p>
      </div>

      {/* Items List */}
      <div className="space-y-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-borderDark rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">{item.label}</h3>
              {items.length > 1 && (
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">
                    Type
                  </label>
                  <select
                    value={item.type}
                    onChange={(e) => updateItem(item.id, 'type', e.target.value)}
                    className="w-full px-3 py-2 border border-borderDark rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="URL">URL</option>
                    <option value="TEXT">Text</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">
                    Content
                  </label>
                  <input
                    type="text"
                    value={item.content}
                    onChange={(e) => updateItem(item.id, 'content', e.target.value)}
                    placeholder={item.type === 'URL' ? 'https://example.com' : 'Enter text content'}
                    className="w-full px-3 py-2 border border-borderDark rounded-lg bg-white text-slate-900 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                {generatedQRs[item.id] ? (
                  <motion.img
                    src={generatedQRs[item.id]}
                    alt={`QR for ${item.label}`}
                    className="w-32 h-32"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  />
                ) : (
                  <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm">QR Preview</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={addItem}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-borderDark rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Plus size={16} />
          Add Another Item
        </button>

        <button
          onClick={generateAll}
          disabled={isGenerating || items.every(item => !item.content.trim())}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryHover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isGenerating ? 'Generating...' : 'Generate All QR Codes'}
        </button>

        {Object.keys(generatedQRs).length > 0 && (
          <button
            onClick={downloadPDF}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download size={16} />
            Download PDF
          </button>
        )}
      </div>

      {Object.keys(generatedQRs).length > 0 && (
        <div className="text-center text-sm text-textSecondary">
          Generated {Object.keys(generatedQRs).length} QR code{Object.keys(generatedQRs).length !== 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
}